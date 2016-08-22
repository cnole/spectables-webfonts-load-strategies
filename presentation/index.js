// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/theme.css");


const images = {
  darkBackground: require('../assets/dark-background.jpg'),
  fontLoad: require('../assets/font-load.png'),
  foit: require('../assets/foit.png'),
  fout: require('../assets/fout.png'),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#F6D528",
  secondary: "#ff4081",
  tertiary: "#3790A2"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={500}>
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Webfont
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit textColor="primary">
              60%
            </Heading>
            <Heading size={1} fit caps textColor="white">
              Der Webseiten verwenden Webfonts
            </Heading>
            <Heading size={10} textColor="grey" marginTop={20}>
              60% von den Top 1000 Websites. 2010 waren es noch 0%
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="secondary">
              3 Wenfonts
            </Heading>
            <Heading size={1} fit caps textColor="white">
              werden durchschnittlich pro Seite geladen
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="tertiary">
              200KB Bis 400KB
            </Heading>
            <Heading size={1} fit caps textColor="white">
              An Webfonts werden durchschnittlich runtergeladen
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="white">
              Webfonts sind
            </Heading>
            <Heading size={1} fit caps textColor="secondary">
              Renderblocking
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Image src={images.fontLoad.replace("/", "")} width="100%" />
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Image src={images.foit.replace("/", "")} width="100%" />
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Image src={images.fout.replace("/", "")} width="100%" />
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="tertiary">
              FOUT ist Progressive enhancement
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="secondary">
              Webfonts
            </Heading>
            <Heading size={1} fit caps textColor="primary">
              load strategies
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="primary">
              verwenden keine Webfonts
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit textColor="primary">
              @font-face
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary" margin="50px auto">
                And hope for the best ;)
              </Heading>
            </Appear>
          </Slide>
          <CodeSlide transition={[]} lang="html" code={require('raw!../assets/font-face.html')}
                     ranges={[
                       { loc: [7, 14] }
                     ]} />
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit textColor="primary">
              font-display
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Noch keine Unterstützung
              </Heading>
            </Appear>
          </Slide>
          <CodeSlide transition={[]} lang="xml" code={require('raw!../assets/font-display.html')}
                     ranges={[
                       { loc: [7, 15] },
                       { loc: [13, 14], note: "non-blocking mit Fallback und swap onload" }
                     ]} />
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="primary">
              Preload
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Limitierte Browser-Unterstützung
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Blockiert initial rendering
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Unmöglich, repaints/reflows zu gruppieren
              </Heading>
            </Appear>
          </Slide>
          <CodeSlide transition={[]} lang="html" code={require('raw!../assets/font-preload.html')}
                     ranges={[
                       { loc: [8, 15] },
                       { loc: [6, 7], note: "<link> mit Preload" }
                     ]} />
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="primary">
              Inline Data URI
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="tertiary" margin="50px auto">
                Kein FOIT und FOUT
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Blockiert initial rendering
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Skaliert nicht
              </Heading>
            </Appear>
          </Slide>
          <CodeSlide transition={[]} lang="html" code={require('raw!../assets/font-inline.html')}
                     ranges={[
                       { loc: [9, 11], note: "Data URI" }
                     ]} />
          <Slide transition={[]} bgImage={images.darkBackground.replace("/", "")}>
            <Heading size={1} fit caps textColor="primary">
              Asynchronous
            </Heading>
            <Heading size={1} fit caps textColor="primary">
              Inline Data URI
            </Heading>
            <Appear fid="1">
              <Heading size={4} textColor="secondary" margin="50px auto">
                kurzes FOIT
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Skaliert nicht besser
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={4} textColor="secondary" margin="50px auto">
                Javascript muss unterstützte Formate kennen
              </Heading>
            </Appear>
          </Slide>
          <CodeSlide transition={[]} lang="html" code={require('raw!../assets/font-async-inline.html')}
                     ranges={[
                       { loc: [16, 17], note: "CSS mit inlined Font per JS nachladen" }
                     ]} />

          <Slide transition={[]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
