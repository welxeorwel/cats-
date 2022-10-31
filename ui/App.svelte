<script>
  import { onMount } from "svelte";


  async function fetchJSON(url) {
    const data = await fetch(url);
    return data.json()
  }
  
  async function getCats() {
    return fetchJSON('/api/cats')
  }

  let cats;
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
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>
  {#await cats}
Waitimng
  {:then value} 
<pre>{ JSON.stringify(cats, 2, 2) }</pre> 
{:catch error}
{error}
  {/await}
</main>