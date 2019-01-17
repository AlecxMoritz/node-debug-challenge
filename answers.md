# Node Debug Challenge Solution


## Compile Time Errors ( Imports, Pathing, and Exports )
1. usercontroller.js : line 1

``` var router = require('express').Router()```


2. db.js : line 18

```module.exports = sequelize;```

3. game.js : line 1

```module.exports = function(sequelize, DataTypes)```

4. gamecontroller.js : line 116

```module.exports = router;```

5. validate-session: line 2

```var User = require('../db').import(//)```

## Logic Errors ( Server Set, End Point Logic )

6. app.js : line 13

  ```app.listen(4000, function())```

7. app.js : line 9 - 

```app.use(require('body-parser').json())```


8. usercontroller.js : line 11

 ```passwordHash : bcrypt.hashSync```()


9. gamecontroller.js : line 42

 ```owner_id : req.user.id```


10. gamecontroller.js : line 9

```games: data```