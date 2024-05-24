# CSS Alternatives

## CSS Modules

css modules are files which has css and the name of the file follows \*.module.css. These special files can be imported in react components using import statement which imports an object. These object has attributes for all the styles defined in the file.
Using css modules we can scope the stying to that specific component and it will not leak outside the component.

# Type safety

## prop type

A run time type validation of the type of props. Following are few types we can use. Implementation example present in UserDetails.jsx.

any - any
node - any renderable
element - jsx component
object - any object
shape({ address: PropTypes.string, pin: PropTypes.number }) - accept object of defined shape
array - any array
arrayOf(PropTypes.string) - array of strings
arrayOf(PropType.oneOfType(PropTypes.string, PropTypes.number)) - array of either string or number
exact({ address: PropTypes.string, pin: PropTypes.number }) - only allow object with address and pin attribute, if any other property is there it throws error
PropType.oneOfType(["A", "B"]) - allows A or B
