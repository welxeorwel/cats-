# cats-

## API

```bash

# Onixia
curl -Lv -XPOST -H 'Content-Type: application/json' -d '{"name": "Onyxia", "age": 7, "colors": ["white", "black", "orange"]}' localhost:3000/api/cats

# Tiri
curl -Lv -XPOST -H 'Content-Type: application/json' -d '{"name": "Tiri", "age": 12, "colors": ["white", "black"]}' localhost:3000/api/cats

# Onixia's review
curl -Lv -XPOST -H 'Content-Type: application/json' -d '{"header": "I just can not get enough of this cat!", "contents": "She is the cutest fucking cat around, so so sweet, wow, what a cat!!"}' localhost:3000/api/cats/tiri/reviews

```