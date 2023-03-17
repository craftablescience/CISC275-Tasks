import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Give Attempts</Form.Label>
                <p>{attempts}</p>
                <Form.Control
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(parseInt(event.target.value))
                    }
                />
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={attempts <= 0}
                >
                    Use
                </Button>
                <Button
                    onClick={() =>
                        isNaN(requested)
                            ? null
                            : setAttempts(attempts + requested)
                    }
                >
                    Gain
                </Button>
            </Form.Group>
        </div>
    );
}
