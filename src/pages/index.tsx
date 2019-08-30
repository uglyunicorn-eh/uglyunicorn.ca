import * as Bulma from "bloomer";
import React from "react";
import { Link } from 'gatsby';

import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Bulma.Hero className={`index-hero is-fullheight`}>
        <Bulma.HeroHeader>

          <Bulma.Navbar role="navigation" aria-label="main navigation">
          <Bulma.Container>
            <Bulma.NavbarBrand>
              <Link to="/" className="navbar-item">Ugly Unicorn</Link>
              <Bulma.NavbarBurger></Bulma.NavbarBurger>
            </Bulma.NavbarBrand>
          </Bulma.Container>
        </Bulma.Navbar>

        </Bulma.HeroHeader>
        <Bulma.HeroBody>
          <Bulma.Container>
          </Bulma.Container>
        </Bulma.HeroBody>
        <Bulma.HeroFooter className="has-text-right is-size-7">
          <p style={{padding: '0.5em'}}>
            <> Photo by </>
            <a href={"https://unsplash.com/@glencarrie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Glen Carrie</a>
            <> on </>
            <a href={"https://unsplash.com/"}>Unsplash</a>
          </p>
        </Bulma.HeroFooter>
      </Bulma.Hero>
  </>
)

export default IndexPage;
