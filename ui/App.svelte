<script>
  import { onMount } from "svelte";
  import { each } from "svelte/internal";


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
    Waitimng
  {:then value} 
    <pre>{ JSON.stringify(value, 2, 2) }</pre>
    <ul>
      <li>Onyxia, 7 years old, has a beautiful mane colored as white, black, and orange</li>
      <li>Tiri, 12 years old, has a beautiful mane colored as white and black</li>
    </ul>
    <ul>
    {#each value as v}
      <li>{JSON.stringify(v)}</li>
    {/each}
    </ul>
  {:catch error}
    {error}
  {/await}
</main>