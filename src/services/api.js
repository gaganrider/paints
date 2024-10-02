import axios from 'axios';

const endpoint = 'https://astralpaints.kwebmakerdigitalagency.com/graphql';

const query = `
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        homeAboutButton {
          target
          title
          url
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeAboutDescription
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          target
          title
          url
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinButton {
          target
          title
          url
        }
        homeJoinDescription
        blogTitle
        blogSubtitle
        categories {
          link
          title
          image {
            node {
              sourceUrl
            }
          }
        }
      }
      seo {
        canonical
        metaKeywords
        metaDesc
        title
        opengraphType
        opengraphSiteName
        opengraphTitle
        opengraphDescription
        opengraphUrl
        schema {
          raw
        }
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
  allColourCategory(where: {slug: "popular"}) {
    nodes {
      name
      colours {
        nodes {
          title
          slug
          colourInfo {
            selectColor
            colourRgb
          }
        }
      }
    }
  }
  blogs {
    nodes {
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      slug
      title
      date
    }
  }
}
`;

const fetchData = async () => {
  return await axios.post(endpoint, {
    query: query
  });
};

export  {fetchData};
