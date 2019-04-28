const callbacks = action => {
  const { callbacks } = action

  return (callbacks || [() => {}, () => {}]).length < 2
    ? [() => {}, () => {}]
    : callbacks
}

export { callbacks }
