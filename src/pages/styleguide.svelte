<script>
    import {
    Swipe,
    SwipeItem
  } from "svelte-swipe";
    import PageTitle from "../components/PageTitle.svelte";
    import Content from "../components/Content.svelte";
    import ContentArea from "../components/ContentArea.svelte";
    import Area from "../components/Area.svelte";
    import Banner from '../components/Banner.svelte';
    import Nav from "../Nav.svelte";
    import Loading from "../components/Loading.svelte";
    import ToggleMenu from "../components/ToggleMenu.svelte";
    import BlockQuote from "../components/BlockQuote.svelte";
    import Button from "../components/Button.svelte";
    import Cards from "../components/Cards.svelte";
    import Card from "../components/Card.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import List from "../components/List.svelte";
    import Figure from "../components/Figure.svelte";
    import IconEspiral from "../components/icons/IconEspiral.svelte";
    import IconCuatro from '../components/icons/IconCuatro.svelte';
    import {
        Tabs,
        TabList,
        TabPanel,
        Tab
    } from '../components/tabs.js';
    // let seconds = 0;
    // setInterval(() => seconds += 1, 10000);
    let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = false;
  let transitionDuration = 1000; //ms
  let defaultIndex = 3; //start from 0
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .swipe-holder {
        height: 40vh;
        width: 100%;
        margin-top: $h2;
    }
</style>

<PageTitle pageTitle="Design System" pageSubTitle="Living styleguide 👋" />

<Content>
<ContentArea>

    <Area title="Typography">
        <h1>h1 Main title</h1>
        <h2>h2 Subtitle</h2>
        <h3>h3 Header</h3>
        <h4>h4 Header</h4>
        <h5>h5 Header</h5>
        <p>Lorem ipsum dolor sit amet <em>consectetur</em> adipisicing elit. Est ullam <strong>tempora</strong> accusamus porro doloremque. Mollitia praesentium neque aut! Quibusdam id in <a href="./about">repellendus</a> sint? Quam iste dignissimos amet nisi, eveniet ullam. <small>Small text</small></p>
        
        <BlockQuote variante={0} quote="This is a blockquote" author="Author" />
    
        <BlockQuote variante={1} quote="This is a blockquote" author="Author" />

        <BlockQuote variante={2} quote="This is a blockquote" author="Author" />
    </Area>

    <Area title="Icons and graphics">
        <div>
            <IconEspiral />
            Full size
        </div>
        <div>
            <IconEspiral size="300px" />
            Fixed custom size
        </div>
        <div>
            <IconEspiral size="24px" />
            Icon size
        </div>
    </Area>

    <Area title="Figure">
        <Figure caption="The caption">
            <img src="img/img0.jpg" alt="Alt text">
        </Figure>
    </Area>

    <Area title="Toggle Menu">
        <ToggleMenu />
    </Area>

    <Area title="Buttons">
        <Button variante={0} text="Button" />
        <Button variante={1} text="Variante 1 de Button" />
    </Area>

    <Area title="Brand">
        <SiteBrand />
    </Area>

    <Area title="Colors">
        <div class="Colors">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Area>

    <Area title="Grid Layout">
        <div class="StyleGuide Main">
            <div class="StyleGuide Main__brand"></div>
            <div class="StyleGuide  Main__nav"></div>
            <div class="StyleGuide  Main__header"></div>
            <div class="StyleGuide  Main__content">
                <div class="StyleGuide  Content">
                    <div class="StyleGuide  Content__header"></div>
                    <div class="StyleGuide  Content__nav"></div>
                    <div class="StyleGuide  Content__area">
                        <article class="StyleGuide  Area"></article>
                        <article class="StyleGuide  Area"></article>
                        <article class="StyleGuide  Area"></article>
                    </div>
                    <div class="StyleGuide  Content__footer"></div>
                </div>
            </div>
            <div class="StyleGuide  Main__footer"></div>
            <div class="StyleGuide  Main__totop"></div>
        </div>
    </Area>

    <Area title="Full Simple Card">
        <Card 
        title="Title" description="Lorem ipsum dolor sit amet consectetur adipisicing."
        variante={2}
        />
    </Area>

    <Area title="Group Cards">
        <Cards>
            <Card 
            title="Title" description="Lorem ipsum dolor sit amet consectetur adipisicing."
            variante={1}
            >
                <Button variante={1} text="Button" />
            </Card>
        
            <Card 
            title="Variante 3"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis dicta molestiae facilis minima."
            image="img/img1.jpg" 
            />
        
            <Card 
            title="With inlne svg instead image"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis dicta molestiae facilis minima."
            variante={4}
            hasImage={false} hasInlineSvg={true}>
                <span slot="hasSvg">
                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round"
                stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
                <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                transform="matrix(.03822 0 0 .03822 -452.1 -33.668)" />
                <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                transform="matrix(.03822 0 0 .03822 -536 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -493.61 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            stroke-width="13.08" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
                    </svg>
                </span>
            </Card>

            <Card 
            title="Éste card no lleva imagen"
            hasImage={false}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio libero quasi non voluptatibus nisi aut adipisci hic reprehenderit ipsum"
            variante={3}
            />

            <Card title="Éste tampoco..." hasImage={false} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, distinctio libero quasi non voluptatibus nisi aut adipisci hic reprehenderit ipsum?"
            variante={0}/>
        </Cards>
    </Area>

    <Area title="Images">
        <img src="img/img0.jpg" alt="">
    </Area>

    <Banner variante={0}>
        Banner (inverted variant) with simple text inside
    </Banner>

    <Banner variante={1}>
        Banner with simple text inside
    </Banner>
    
    <Banner variante={2}>
        Banner with simple text inside
    </Banner>

    <Area title="Tabs">
        <Tabs>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Tab>Tab 4</Tab>
            </TabList>

            <TabPanel>
                Tab panel 1
            </TabPanel>

            <TabPanel>
                Tab panel 2
            </TabPanel>

            <TabPanel>
                Tab panel 3
            </TabPanel>

            <TabPanel>
                Tab panel 4
            </TabPanel>
        </Tabs>
    </Area>

    <Area title="Component Header">
        <PageTitle pageTitle="Page title" pageSubTitle="Page Subtitle" />
    </Area>
    
    <Area title="Fetching Json data from service">
        <!-- {#await loadedJson}
            <Loading/>
        {:then data}
            <Cards>                
                {#each data.demo as demo}
                <Card 
                    title={demo.title} 
                    description={demo.description}
                    image={demo.img}
                />
                {/each}
            </Cards>
        {:catch error}
            <p>An error occurred!</p>
        {/await} -->
    </Area>

    <div class="swipe-holder">
        <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
          <SwipeItem>
            <img src="img/img0.jpg" alt="">
          </SwipeItem>
          <SwipeItem>
            <img src="img/img4.jpg" alt="">
          </SwipeItem>
          <SwipeItem>
            <img src="img/img2.jpg" alt="">
          </SwipeItem>
          <SwipeItem>
            <img src="img/img3.jpg" alt="">
          </SwipeItem>
        </Swipe>
      </div>
    
    <Banner variante={0}>
        <BlockQuote variante={1} quote="This is a blockquote" author="Author" />
        <IconEspiral />
    </Banner>
    <Banner variante={1}>
        <BlockQuote variante={2} quote="This is a blockquote" author="Author" />
        <IconEspiral />
    </Banner>
    <Banner variante={2}>
        <BlockQuote variante={0} quote="This is a blockquote" author="Author" />
        <IconEspiral />
    </Banner>

</ContentArea>
</Content>