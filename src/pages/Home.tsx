import React, { useEffect, useState } from "react";
import "../styles/Home.css";

interface Snowflake {
    left: string;
    fontSize: string;
    animationDuration: string;
    opacity: number;
}

const Home: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = Array.from({ length: 50 }).map(() => ({
            left: `${Math.random() * 100}vw`,
            fontSize: `${Math.random() * 10 + 10}px`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            opacity: Math.random(),
        }));
        setSnowflakes(flakes);
    }, []); // empty dependency → run only once after mount

    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>Anish Pathak</h1>
                <p>Frontend Developer</p>
            </div>

            {snowflakes.map((flake, i) => (
                <div
                    key={i}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        fontSize: flake.fontSize,
                        animationDuration: flake.animationDuration,
                        opacity: flake.opacity,
                    }}
                >
                    ❄
                </div>
            ))}
        </section>
    );
};

export default Home;
