1. Automate all API by returning them as strings, not objects. We can parse it in the front end with react.

```
query {
    apis(args): [API!]!
        API(args) {
            String
        }
}
```