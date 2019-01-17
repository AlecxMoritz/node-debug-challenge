# Node Debug Challenge Solution


## Compile Time Errors ( Imports, Pathing, and Exports )
1. usercontroller.js : line 1 - 'express' not being required

``` var router = require('express').Router()```


2. db.js : line 18 - Not exporting the instance of sequelize

```module.exports = sequelize;```

3. game.js : line 1 - Not exporting the model

```module.exports = function(sequelize, DataTypes)```

4. gamecontroller.js : line 116 - Not exporting ```router``` correctly

```module.exports = router;```

5. validate-session: line 2 - Trying to import 'sequelize' and not the *instance* of Sequelize

```var User = require('../db').import(//)```

## Logic Errors ( Server Set, End Point Logic )

6. app.js : line 13 - No host provided

  ```app.listen(4000, function())```

7. app.js : line 9 - Not configuring 'body-parser'

```app.use(require('body-parser').json())```


8. usercontroller.js : line 11 - Column passwordHash has a capital H, not under cased

 ```passwordHash : bcrypt.hashSync```()


9. gamecontroller.js : line 42 - There shouldn't be a ```user``` object in the ```req.body```. It's part of the request

 ```owner_id : req.user.id```


10. gamecontroller.js : line 9 - The return from the ```.findAll()``` was called ```data``` in the ```.then()```, not ```games```

```games: data```