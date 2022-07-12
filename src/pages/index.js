import React from 'react';
import { graphql, Link } from 'gatsby';

const Page = ({
  data: {
    allMarkdownRemark: { nodes }
  }
}) => {
  return (
    <main>
      <h1>Gatsby Image Alias</h1>
      <p>Create an Image Qiuery alias with the correct size for FullWidth and Thumbnail</p>
      <ul>
        {nodes.map((node, index) => {
          const {
            frontmatter: { author },
            gatsbyPath
          } = node;

          return (
            <li key={index}>
              <Link to={gatsbyPath}>{author}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          author
        }
        gatsbyPath(filePath: "/{markdownRemark.frontmatter__author}")
      }
    }
  }
`;

export default Page;
