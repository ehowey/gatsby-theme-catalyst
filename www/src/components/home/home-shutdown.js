/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { baseColors } from "@theme-ui/preset-tailwind"

const HomeShutdown = () => {
  return (
    <div>
      <Themed.p>
        After 2 years and over 2000 commits I have made the difficult decision
        to shutdown Gatsby Theme Catalyst. This project will not be migrated to
        Gatsby v4.
      </Themed.p>
      <Themed.p>
        You will be able to access the docs indefinetely and I will continue to
        respond to any issues on GitHub.
      </Themed.p>
      <Themed.p>
        Before I talk about why, I want to say thank you to everyone who helped
        out and contributed to this project it any way. A retweet, a comment, an
        issue, or a pull request - they were all appreciated. For those of you I
        collaborated with more closely it was exciting and fun to work with
        learn from you.
      </Themed.p>
      <Themed.p>
        A few quick notes about why I made this decision. TLDR; I don't think
        Gatsby Themes are the best approach for my own freelance work anymore,
        however I still rely heavily on Gatsby as a framework.
      </Themed.p>
      <Themed.ul>
        <Themed.li>
          <strong>Customization:</strong> I struggled with the themes when
          needing to do a really custom piece of code and found myself using
          more and more component shadowing to the point it was frustrating to
          develop with.
        </Themed.li>
        <Themed.li>
          <strong>Maintainability:</strong> With all of the dependencies tucked
          away inside the themes coming back to a project after 6 months or a
          year was a daunting task as I didn't have the power to granularly
          manage updating dependencies as I needed to.
        </Themed.li>
        <Themed.li>
          <strong>Speed:</strong> Themes are great at the start - you can go
          from zero to hero in a matter of minutes but then as projects grew and
          got more complex I found myself being slowed down by having to
          reference files back inside of the theme. I found it much more
          efficient to have all of the components, hooks, and files together in
          single repo and not siloed off into themes.
        </Themed.li>
        <Themed.li>
          <strong>Lack of use:</strong> This one didn't matter as much to me,
          but no one really uses these themes much as far as I can tell. Given
          that now I am also migrating my own freelance work away from the
          themes it just isn't worth the time and effort to maintain a complex
          project very few people are using.
        </Themed.li>
      </Themed.ul>
      <Themed.p>
        If you are currently using these themes I have updated and published a
        release that supports Gatsby v3.14 which is the last version of Gatsby
        before v4.
      </Themed.p>
      <Themed.p>
        With moderate effort you can reconfigure your site into a traditional
        Gatsby site, ejecting from the themes. The main tasks involve copy and
        pasting the theme components into your own repo, and merging gatsby-node
        as needed. If you are familiar with Gatsby projects this is fairly
        straightforward but could be a struggle if you are less familiar with
        the internal workings of Gatsby.
      </Themed.p>
      <Themed.p>I apologize for any frustration this may cause you.</Themed.p>
      <Themed.p>
        If you get stuck please feel free to reach out to me, and I will do my
        best to help. I hope to also have an example repo of what this could
        look like available in the near future.
      </Themed.p>
      <Themed.p>Happy coding!</Themed.p>
      <Themed.p>
        —
        <Themed.a href="https://www.erichowey.dev/" sx={{ fontSize: 2 }}>
          Eric Howey
        </Themed.a>
      </Themed.p>
    </div>
  )
}

export default HomeShutdown
