# imshaby-schedule



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type      | Default     |
| ---------- | ----------- | ----------- | --------- | ----------- |
| `expanded` | `expanded`  |             | `boolean` | `true`      |
| `parishId` | `parish-id` |             | `string`  | `undefined` |


## Dependencies

### Depends on

- [day-plate](../navs)
- [no-mass](../mass)
- [mass-slot](../mass)

### Graph
```mermaid
graph TD;
  imshaby-schedule --> day-plate
  imshaby-schedule --> no-mass
  imshaby-schedule --> mass-slot
  mass-slot --> mass-plate
  mass-slot --> mass-header
  mass-slot --> mass-additional
  mass-slot --> mass-footer
  style imshaby-schedule fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
