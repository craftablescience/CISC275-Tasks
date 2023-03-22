import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "pink",
    "blue",
    "green",
    "aqua",
    "turquoise",
    "maroon",
    "orange"
];

export function ChangeColor(): JSX.Element {
    const [current, setCurrent] = useState<string>(COLORS[0]);
    return (
        <Form.Group controlId="changeColor">
            {COLORS.map((color) => (
                <Form.Check
                    inline
                    type="radio"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCurrent(event.target.value)
                    }
                    name={color}
                    key={color}
                    label={color}
                    value={color}
                    checked={current === color}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: current }}
                    data-testid="colored-box"
                >
                    {current}
                </span>
                .
            </div>
        </Form.Group>
    );
}
