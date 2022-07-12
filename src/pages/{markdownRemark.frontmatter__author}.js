import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Page = ({
  data: {
    markdownRemark: {
      id,
      frontmatter: {
        date,
        author,
        image: {
          childImageSharp: { fullWidth, thumbnail }
        }
      },
      rawMarkdownBody
    }
  }
}) => {
  return (
    <main style={{ display: 'grid', gap: 8 }}>
      <Link to="/">Back</Link>
      <h1>{date}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 8 }}>
        <GatsbyImage image={thumbnail} alt="Thumbnail" />
        <h2>{author}</h2>
      </div>
      <GatsbyImage image={fullWidth} alt="Full Width" />
      <p>{rawMarkdownBody}</p>
    </main>
  );
};

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date
        author
        image {
          childImageSharp {
            fullWidth: gatsbyImageData(width: 3000)
            thumbnail: gatsbyImageData(width: 100)
          }
        }
      }
      rawMarkdownBody
    }
  }
`;

export default Page;
