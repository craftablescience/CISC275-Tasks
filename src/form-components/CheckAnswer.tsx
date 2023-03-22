import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Check Answer</Form.Label>
                <Form.Control
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setName(event.target.value)
                    }
                />
            </Form.Group>
            <p>{name === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
