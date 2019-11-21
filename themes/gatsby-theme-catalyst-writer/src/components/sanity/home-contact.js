/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PortableText from "@sanity/block-content-to-react";
import clientConfig from "./client-config";
import serializers from "./serializers";

const HomeContact = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityHomePage(sort: { fields: _updatedAt, order: DESC }, limit: 1) {
        nodes {
          _rawContact
        }
      }
    }
  `);

  const pageData = data.allSanityHomePage.nodes;

  return (
    <Fragment>
      {pageData.map(page => (
        <Fragment key={page.title}>
          <PortableText
            blocks={page._rawContact}
            serializers={serializers}
            {...clientConfig.sanity}
          />
        </Fragment>
      ))}
    </Fragment>
  );
};

export default HomeContact;
