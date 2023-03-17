import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <Form.Group controlId="editMode">
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editing}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEditing(event.target.checked)
                }
            />
            {editing ? (
                <>
                    <Form.Control
                        type="textbox"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                </>
            ) : (
                <p>{`${name} is ${student ? "a" : "not a"} student`}</p>
            )}
        </Form.Group>
    );
}
