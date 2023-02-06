import React from 'react';
import BlogArchivePage from '@theme-original/BlogArchivePage';
import type BlogArchivePageType from '@theme/BlogArchivePage';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof BlogArchivePageType>;

export default function BlogArchivePageWrapper(props: Props): JSX.Element {
  const posts = props.archive.blogPosts.slice(0, 10);


  return (
    <>
      {/* <BlogArchivePage archive={{blogPosts: posts}} /> */}
    </>
  );
}
