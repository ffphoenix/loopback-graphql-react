import React from "react";
import FormGroupError from "./FormGroupError";

import {
    FormGroup,
    Label,
} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class CwysiwygCollab extends React.Component {

    render() {
        const options = this.props.options;
        const key = options.key;
        const error = options.error || undefined;
        const label  = options.label || `unlabled`;
        const type  = options.type || `text`;
        const placeholder  = options.placeholder || `Enter ` + label;
        const value = options.value  || ``;
        const cursors = options.cursors || [];
        const customStyleMap = options.customStyleMap || {};

        return (
            <FormGroup>
                <Label htmlFor={key}>{label}</Label>
                <div className={error ? 'form-control is-invalid' : 'form-control' }>
                    {cursors.map((cursor, i) =>
                        <span className={'cursor'} style={cursor} key={i} />
                    )}
                    <Editor
                        autoFocus
                        editorState={value}
                        toolbarClassName="rdw-storybook-toolbar"
                        wrapperClassName="rdw-storybook-wrapper"
                        editorClassName="rdw-storybook-editor"
                        onEditorStateChange={(state) => options.handleChange(key, state)}
                        customStyleMap={customStyleMap}
                    />
                </div>
                <FormGroupError className="rdw-storybook-root wysiwyg-block" error={error} />
            </FormGroup>
        )
    }
}

export default CwysiwygCollab;