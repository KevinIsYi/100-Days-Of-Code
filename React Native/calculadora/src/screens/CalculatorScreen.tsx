import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc';
import { styles } from '../theme/appTheme';

enum Operators {
    suma,
    resta,
    multiplicacion,
    division
};

export const CalculatorScreen = () => {

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');
    const lastOperation = useRef<Operators>();

    const clean = () => {
        setNumber("0");
        setPrevNumber('0');
    }

    const buildNumber = (pressedNumber: string) => {
        if (number.includes('.') && pressedNumber === '.') {
            return;
        }
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (pressedNumber === '.') {
                setNumber(`${number}${pressedNumber}`);
            }
            else if (pressedNumber === '0' && number.includes('.')) {
                setNumber(`${number}${pressedNumber}`);
            }
            else if (pressedNumber !== '0' && !number.includes('.')) {
                setNumber(pressedNumber);
            }
            else if (pressedNumber === '0' && !number.includes('.')) {
                return;
            }
            else {
                setNumber(`${number}${pressedNumber}`);
            }
        }
        else {
            setNumber(`${number}${pressedNumber}`);
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber(`-${number}`);
        }
    }

    const delButton = () => {
        if (number.startsWith('-') && number.length === 2) {
            setNumber('0');
        }
        else if (number.length === 1) {
            setNumber('0');
        }
        else {
            setNumber(number.slice(0, -1));
        }
    }


    const moveToPrev = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }
        else {
            setPrevNumber(number);
        }

        setNumber('0');
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(prevNumber);

        switch (lastOperation.current) {
            case Operators.suma:
                setNumber(`${num1 + num2}`);
                break;
            case Operators.resta:
                setNumber(`${num2 - num1}`);
                break;
            case Operators.division:
                setNumber(`${num2 / num1}`);
                break;
            case Operators.multiplicacion:
                setNumber(`${num1 * num2}`);
                break;
        }
        setPrevNumber('0');
    }

    const btnDiv = () => {
        moveToPrev();
        lastOperation.current = Operators.division;
    }
    const btnMUltiply = () => {
        moveToPrev();
        lastOperation.current = Operators.multiplicacion;
    }
    const btnSum = () => {
        moveToPrev();
        lastOperation.current = Operators.suma;
    }
    const btnRest = () => {
        moveToPrev();
        lastOperation.current = Operators.resta;
    }

    return (
        <View style={styles.calculatorContainer}>
            {
                prevNumber !== '0' && (
                    <Text style={styles.smallResult}>{prevNumber}</Text>
                )
            }
            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {number}
            </Text>

            <View style={styles.file}>
                <ButtonCalc text="C" color="#9B9B9B" action={clean} />
                <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
                <ButtonCalc text="del" color="#9B9B9B" action={delButton} />
                <ButtonCalc text="/" color="#FF9427" action={btnDiv} />
            </View>
            <View style={styles.file}>
                <ButtonCalc text="7" action={buildNumber} />
                <ButtonCalc text="8" action={buildNumber} />
                <ButtonCalc text="9" action={buildNumber} />
                <ButtonCalc text="X" color="#FF9427" action={btnMUltiply} />
            </View>
            <View style={styles.file}>
                <ButtonCalc text="4" action={buildNumber} />
                <ButtonCalc text="5" action={buildNumber} />
                <ButtonCalc text="6" action={buildNumber} />
                <ButtonCalc text="-" color="#FF9427" action={btnRest} />
            </View>
            <View style={styles.file}>
                <ButtonCalc text="1" action={buildNumber} />
                <ButtonCalc text="2" action={buildNumber} />
                <ButtonCalc text="3" action={buildNumber} />
                <ButtonCalc text="+" color="#FF9427" action={btnSum} />
            </View>
            <View style={styles.file}>
                <ButtonCalc text="0" anchor action={buildNumber} />
                <ButtonCalc text="." action={buildNumber} />
                <ButtonCalc text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
}
