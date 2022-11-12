<script>
export let cat;
let reviews = [];

function formatList(list) {
    if(list.length == 3){
      return `${list[0]}, ${list[1]}, and ${list[2]}` 
    }
    else if(list.length == 2){
      return `${list[0]} and ${list[1]}`
    }
}

async function showReviews() {
    // this cat's name is Tiri
    //alert(`this cat's name is ${cat.name}!`)
    reviews = await getReviews()
}
async function fetchJSON(url) {
    const data = await fetch(url);
    return data.json()
  }
  
  async function getReviews() {
    return fetchJSON(`/api/cats/${cat.name}/reviews`)
  }
</script>

<pre>{ JSON.stringify(cat, 2, 2) }</pre>
<p>
    {cat.name}, {cat.age} years old, has a beautiful mane colored as {formatList(cat.colors)}.
    <button on:click|once={showReviews}>Check reviews</button>
</p>
{#await reviews}
Waiting
{:then value} 
 <pre>{ JSON.stringify(value, 2, 2) }</pre> 
{:catch error}
{error}
{/await}
