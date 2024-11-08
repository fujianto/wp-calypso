import { useCallback, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import autosize from 'autosize';
import React, { KeyboardEvent } from 'react';

export const ResizableTextarea: React.FC< {
	className: string;
	inputRef: React.RefObject< HTMLTextAreaElement >;
	keyUpHandle: () => void;
	sendMessageHandler: () => Promise< void >;
} > = ( { className, sendMessageHandler, inputRef, keyUpHandle } ) => {
	const onKeyUp = useCallback(
		async ( event: KeyboardEvent< HTMLTextAreaElement > ) => {
			if ( inputRef.current?.value.trim() === '' ) {
				// call the handler to remove the validation message if visible.
				keyUpHandle();
				return;
			}
			if ( event.key === 'Enter' && ! event.shiftKey ) {
				event.preventDefault();
				await sendMessageHandler();
			}
		},
		[ inputRef, sendMessageHandler, keyUpHandle ]
	);

	useEffect( () => {
		// Set's back the textarea height after sending messages, it is needed for long messages.
		if ( inputRef.current ) {
			inputRef.current.style.height = 'auto';
			autosize.update( inputRef.current );
		}
	}, [ sendMessageHandler, inputRef ] );

	useEffect( () => {
		if ( inputRef.current ) {
			const currentInput = inputRef.current;
			autosize( currentInput );

			return () => {
				autosize.destroy( currentInput );
			};
		}
	}, [ inputRef ] );

	return (
		<textarea
			ref={ inputRef }
			rows={ 1 }
			className={ className }
			onKeyUp={ onKeyUp }
			placeholder={ __( 'Type a message…', __i18n_text_domain__ ) }
			style={ { transition: 'none' } }
		/>
	);
};
