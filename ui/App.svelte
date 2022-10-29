<script>
  async function fetchJSON(url) {
    const data = await fetch(url);
    return data.json()
  }
  
  async function getCats() {
    return fetchJSON('/api/cats')
  }

  let cats = Promise.resolve([]);
  // let cats = getCats();
	// import Button from "./Button.svelte";
</script>

<style>
  main {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<main>
	<h1>Hello CodeSandbox</h1>
	<h2>Start editing to see some magic happen!</h2>

  {#await cats then x }
	<pre>{ JSON.stringify(x, 2, 2) }</pre>
  {/await}
</main>