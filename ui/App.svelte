<script>
  import { onMount } from "svelte";
  import { each } from "svelte/internal";
  import Cat from "./Cat.svelte";

  async function fetchJSON(url) {
    const data = await fetch(url);
    return data.json()
  }
  
  async function getCats() {
    return fetchJSON('/api/cats')
  }
  
  let cats = []
  onMount(async () => {
    cats = await getCats()
  })
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: left;
  }
</style>

<main>
	<h1>Cats</h1>
  {#await cats}
    Waiting
  {:then value} 
    <!-- <pre>{ JSON.stringify(value, 2, 2) }</pre> -->
    <div>
    {#each value as cat}
      <Cat cat={cat}/>
    {/each}
    </div>
  {:catch error}
    {error}
  {/await}
</main>