import React from 'react'

export default function FAQ() {
    return (
        <div className="container">
            <h1>
                <span className="hoverEffect">
                    FAQ's
        </span>
            </h1>
            <style jsx>{`
            .hoverEffect {
                background: linear-gradient(
                  to bottom,
                  ${colors.primary} 0%,
                  ${colors.primary} 100%
                );
                background-position: 0 73%;
                background-repeat: repeat-x;
                background-size: 9px 9px;
                color: #000;
                text-decoration: none;
                transition: all 0.5s;
              }
              .hoverEffect:hover {
                background-size: 10px 50px;
                color: #fff;
              }
`}</style>
        </div>
    )
}
