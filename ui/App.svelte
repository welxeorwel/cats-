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
  function formatList(list) {
    if(list.length == 3){
      return `${list[0]}, ${list[1]}, and ${list[2]}` 
    }
    else if(list.length == 2){
      return `${list[0]} and ${list[1]}`
    }
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
      <!-- <li>Onyxia, 7 years old, has a beautiful mane colored as white, black, and orange</li>
      <li>Tiri, 12 years old, has a beautiful mane colored as white and black</li> -->
    </ul>
    <ul>
    {#each value as cat}
      <li>{cat.name}, {cat.age} years old, has a beautiful mane colored as {formatList(cat.colors)}</li>
    {/each}
    </ul>
  {:catch error}
    {error}
  {/await}
</main>