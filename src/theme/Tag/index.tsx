import React from 'react';
import Tag from '@theme-original/Tag';
import type TagType from '@theme/Tag';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof TagType>;

export default function TagWrapper(props: Props): JSX.Element {
  const isTech = props.label.startsWith('Tech-')
  const name = props.label.replace('Tech-', '')
  return (
    <>
      <Tag {...props} label={name} />
    </>
  );
}
