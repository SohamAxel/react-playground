# Forms

## Different form elements

**Checkbox**

controlled input

```JSX
<input type="checkbox" checked={true} onChange={callback}/>
```

uncontrolled input

```JSX
<input type="checkbox" defaultChecked/>
```

**Textarea/Input**
controlled

```JSX
<textarea value="abcdef" onChange={callback} />
<input value="abcdef" onChange={callback} />
```

uncontrolled

```JSX
<textarea defaultValue="abcdef"/>
<input defaultValue="abcdef"/>
```

**Select**

controlled

```JSX
<select value={2} onChange={callback}>
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
</select>
```

uncontrolled

```JSX
<select defaultValue={2}>
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
</select>
```

_We use uncontrolled input with useRef hook and controlled input with useState hook_
