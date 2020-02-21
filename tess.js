db.each('SELECT * FROM "talon"', function(err, row) {
  if (err) throw err
  console.log(row)
})