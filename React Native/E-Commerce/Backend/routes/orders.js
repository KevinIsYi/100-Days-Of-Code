const { Router } = require('express');
const Order = require('../model/ordersSchema');
const OrderItem = require('../model/orderItem');
const router = Router();

router.get('/orders', async(req, res) => {
    try {
        const orderList = await Order.find().populate('user', 'name').sort({'dateOrdered': -1}); // Sort from newes to oldest User sort('dateOrdered') if it needs to be sorted from oldest to newest
        res.json({
            ok: true,
            orderList
        });
    } catch (error) {
        console.log(error);
        res.status().json({
            ok: false,
            error
        });
    }
});

router.get('/orders/:id', async(req, res) => {
    try {
        const { params:{ id } } = req;
        const order = await Order.findById(id)
            .populate('user', 'name')
            .populate({ 
                path: 'orderItems', populate: {
                    path: 'product',
                    populate: 'category'
                }
            });
        res.json({
            ok: true,
            order
        });
    } catch (error) {
        console.log(error);
        res.status().json({
            ok: false,
            error
        });
    }
});

router.put('/orders/:id', async (req, res) => {
    try {
        const { params:{ id }, body } = req;
        const order = await Order.findByIdAndUpdate(id, body, {
            new: true
        });

        if (!order) {
            return res.status(404).json({
                ok: false,
                message: "Order doesn't exist"
            });
        }
        res.json({
            ok: true,
            order
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.delete('/orders/:id', async (req, res) => {
    try {
        const { params:{ id } } = req;
        const deletedOrder = await Order.findByIdAndDelete(id);

        
        if (!deletedOrder) {
            return res.status(404).json({
                ok: false,
                message: "Order doesn't exist"
            });
        }

        const { orderItems } = deletedOrder;
        for (const order of orderItems) {
            await OrderItem.findByIdAndDelete(order);
        }
        res.json({
            ok: true,
            message: 'Order was deleted'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.post('/orders', async (req, res) => {
    
    try {
        const { body } = req;
        const { orderItems } = body;

        const orderItemsIds = Promise.all(orderItems.map(async ({ product, quantity }) => {
            const newOrderItem = new OrderItem({
                product,
                quantity
            });

            await newOrderItem.save();

            return newOrderItem._id;
        }));

        const orderItemsIDsResolved = await orderItemsIds;
        const totalPrices = await Promise.all(orderItemsIDsResolved.map(async orderItemId => {
            const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
            const totalPrice = orderItem.product.price * orderItem.quantity;
            return totalPrice;
        }));

        const totalPrice = totalPrices.reduce((a, b) => a + b, 0);

        body.orderItems = orderItemsIDsResolved;
        body.totalPrice = totalPrice;
        const order = new Order(body);

        await order.save();
        res.status(201).json({
            ok: true,
            order
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/orders/get/totalsales', async (req, res) => {
    try {
        const totalSales = await Order.aggregate([
            {
                $group: {
                    _id: null, // id must be included
                    totalsales: {
                        $sum: '$totalPrice'
                    }
                }
            }
        ]);
        
        if(!totalSales) {
            return res.status(400).json({
                ok: false,
                message: "The total sales cannot be generated"
            });
        }

        res.json({
            ok: true,
            totalSales: totalSales.pop().totalsales
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        });
    }
});

router.get('/orders/get/count', async (req, res) => {
    try {
        const orderCount = await Order.countDocuments((count) => count);
        res.json({
            ok: true,
            orderCount
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            error
        })
    }
});

router.get('/orders/get/userorders/:userid', async(req, res) => {
    try {
        const { params: { userid } } = req;

        const userOrderList = await Order.find({
            user: userid
        }).populate('user', 'name')
            .populate({ 
                path: 'orderItems', populate: {
                    path: 'product',
                    populate: 'category'
                }
        }).sort(
            {
                'dateOrdered': -1
            }
        ); // Sort from newes to oldest User sort('dateOrdered') if it needs to be sorted from oldest to newest
        
            res.json({
            ok: true,
            userOrderList
        });
    } catch (error) {
        console.log(error);
        res.status().json({
            ok: false,
            error
        });
    }
});

module.exports = router;