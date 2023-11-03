import * as Bulma from "bloomer";
import React from "react";
import { Link } from 'gatsby';

import SEO from "../components/seo";
import GitHub from "../images/logo-github.svg";

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Bulma.Hero className={`index-hero is-fullheight`}>
      <Bulma.HeroHeader>

        <Bulma.Navbar role="navigation" aria-label="main navigation">
          <Bulma.Container>
            <Bulma.NavbarBrand>
              <Link to="/" className="navbar-item">Ugly Unicorn</Link>
            </Bulma.NavbarBrand>
          </Bulma.Container>
        </Bulma.Navbar>

      </Bulma.HeroHeader>
      <Bulma.HeroBody>
        <Bulma.Container>
        </Bulma.Container>
      </Bulma.HeroBody>
      <Bulma.HeroFooter className="is-size-7" style={{ padding: "0 10px 20px" }}>
        <Bulma.Container>

          <Bulma.Columns className="is-mobile">
            <Bulma.Column>
              <iframe src="https://status.uglyunicorn.ca/badge" width="250" height="30"></iframe>
            </Bulma.Column>
            <Bulma.Column className="has-text-right">
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, height: 32 }}>
                <span>Made with &hearts; in Canada, eh!</span>


                <span>|</span>

                <a href="https://github.com/uglyunicorn-eh" title="GitHub">
                  <span className="icon">
                    <img src={GitHub} alt="Github" width={20} height={20} />
                  </span>
                </a>

                <span>|</span>

                <span>
                  {"Photo by "}
                  <a href={"https://unsplash.com/@glencarrie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Glen Carrie</a>
                  {" on "}
                  <a href={"https://unsplash.com/"}>Unsplash</a>
                </span>
              </div>
            </Bulma.Column>
          </Bulma.Columns>
        </Bulma.Container>
      </Bulma.HeroFooter>
    </Bulma.Hero>
  </>
)

export default IndexPage;
