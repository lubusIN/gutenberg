/**
 * Internal dependencies
 */

import { LINE_SEPARATOR } from './special-characters';

/**
 * Gets the index of the first parent list. To get the parent list formats, we
 * go through every list item until we find one with exactly one format type
 * less.
 *
 * @param {Object} value      Value to search.
 * @param {number} startIndex Index to start search at.
 *
 * @return {Array} The parent list line index.
 */
export function getParentLineIndex( { text, formats }, startIndex ) {
	const startFormats = formats[ startIndex ] || [];

	let index = startIndex;

	while ( index-- ) {
		if ( text[ index ] !== LINE_SEPARATOR ) {
			continue;
		}

		const formatsAtIndex = formats[ index ] || [];

		if ( formatsAtIndex.length === startFormats - 1 ) {
			return index;
		}
	}
}
