import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<string>(options[0]);
    return (
        <div>
            <Form.Group controlId="multipleChoiceQuestion">
                <Form.Label>Multiple Choice Question</Form.Label>
                <Form.Select
                    value={selected}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelected(event.target.value)
                    }
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{selected === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
