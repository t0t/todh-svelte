<script>
  import {
    fade
  } from 'svelte/transition';
  import PageTitle from "../components/PageTitle.svelte";
  import Content from "../components/Content.svelte";
  import ContentArea from "../components/ContentArea.svelte";
  import Area from "../components/Area.svelte";
  import Banner from '../components/Banner.svelte';
  // import Loading from "../components/Loading.svelte";
  import BlockQuote from "../components/BlockQuote.svelte";
  // import Button from "../components/Button.svelte";
  import Cards from "../components/Cards.svelte";
  import Card from "../components/Card.svelte";
  import IconEspiral from "../components/icons/IconEspiral.svelte";
  import IconTres from '../components/icons/IconTres.svelte';
  import MainFeatures from '../components/MainFeatures.svelte';
  // import Step0 from '../components/Step0.svelte';
  // import Step1 from '../components/Step1.svelte';
  // import Step2 from '../components/Step2.svelte';
  // import Step3 from '../components/Step3.svelte';
  // import Step4 from '../components/Step4.svelte';

  // let step = 0;
  // let inX = 1000;
  // let outX = -1000;

  // function prev() {
  //   inX = -1000;
  //   outX = 1000;
  //   step = step - 1;
  // }

  // function next() {
  //   inX = 1000;
  //   outX = -1000;
  //   step = step + 1;
  // }
  </script>
  
  <style lang="scss">
    @import "../styles/main.scss";
  </style>
  
  <svelte:head>
    <title>TODH</title>
  </svelte:head>
  
  <PageTitle pageTitle="TODH" pageSubTitle="Visión holística y artefactos en torno a la Creación 👋" />
  
  <Content>
    <ContentArea>
      
      <!-- <Area>
        <div class="Content__nav">
          <button on:click="{prev}" disabled="{step < 1}">&lt;</button>
          <button on:click="{next}" disabled="{step > 3}">&gt;</button>
          <em>{ step } / 4</em>
        </div>
      {#if step == 0}
        <div in:fade="{{x: inX}}" out:fade="{{x: outX}}">
          <Step0/>
        </div>
        {:else if step == 1}
        <div in:fade="{{x: inX}}" out:fade="{{x: outX}}">
          <Step1/>
        </div>
        {:else if step == 2}
        <div in:fade="{{x: inX}}" out:fade="{{x: outX}}">
          <Step2/>
        </div>
        {:else if step == 3}
        <div in:fade="{{x: inX}}" out:fade="{{x: outX}}">
          <Step3/>
        </div>
        {:else if step == 4}
        <div in:fade="{{x: inX}}" out:fade="{{x: outX}}">
          <Step4/>
        </div>
      {/if}
      </Area> -->

      <MainFeatures></MainFeatures>

      <Banner variante={1}>
        <IconTres />
        <BlockQuote variante={2} quote="This is a Blockquote component into a Banner" author="Author" />
      </Banner>
  
        <Banner>
          <BlockQuote quote="This is a blockquote" author="Author" />
          <IconEspiral />
        </Banner>
  
    </ContentArea>
  
  </Content>