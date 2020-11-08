import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture" 
                style={{
                    backgroundImage: "url(https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg)",
                    backgroundPosition: "center center",
                    backgroundSize: "cover"
                }}
            />
            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo día</p>
                <p className="journal__entry-content">Hsdklfkslñf sdfkdls fsdkljfsdjlfds fjksldl</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>15</h4>
            </div>
        </div>
    )
}
