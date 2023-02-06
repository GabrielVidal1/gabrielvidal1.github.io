import React from 'react';
import TagsListByLetter from '@theme-original/TagsListByLetter';
import type TagsListByLetterType from '@theme/TagsListByLetter';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TagsListByLetterType>;

export default function TagsListByLetterWrapper(props: Props): JSX.Element {
  return (
    <>
    qsdqsd
      <TagsListByLetter  {...props} />
    </>
  );
}
