function fn(i) { 
  if (i > 10)
      return

  console.log(i)
  fn(i + 1)
  return
}

fn(2)