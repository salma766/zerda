import React from 'react'

interface ProfileAvatarProps {
    firstName: string
    lastName?: string
    radius?: number
    rounded?: boolean
    style?: React.CSSProperties
}

function ProfileAvatar({ firstName, lastName, radius, rounded, style }: ProfileAvatarProps) {
    const colors = [
        "rgb(168, 21, 99)",
        "rgb(255, 192, 203)",
        "rgb(126, 55, 148)",
        "rgb(179, 0, 60)",
        "rgb(58, 96, 36)",
        "rgb(190, 165, 202)",
        "rgb(227, 189, 200)",
        "rgb(153, 187, 208)",
        "rgb(178, 198, 154)",
    ]
    const firstCharacter = firstName.toLowerCase().charAt(0)
    const uniqueCode = (firstCharacter.charCodeAt(0) - 65) % colors.length;
    const color = colors[uniqueCode]

    return (
        <div style={{
            ...style,
            width: (radius) ? `${radius}px` : "45px",
            height: (radius) ? `${radius}px` : "45px",
            backgroundColor: color,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: (rounded === false) ? "0.375rem" : "50%",
            fontSize: (radius && radius < 35) ? "11px" : "15px",
            fontWeight: 300
        }} >
            {firstName.charAt(0).toUpperCase()}{lastName?.charAt(0).toUpperCase()}
        </div>
    )
}

export default ProfileAvatar