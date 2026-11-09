# quickmail / quick-gmail
cli tool to generate temp gmail accounts to get codes for services

> [!WARNING]
> you need to get an api key from https://rapidapi.com/johndevz/api/gmailnator and put it in `.apikey`

# usage
| argument        | info |
|-----------------|------|
| -d / -dontsave  | dont save the latest email to %TEMP%/.quickmail |
| -e / -email     | the email whoes inbox will be listed, if it is not provided it will look at TEMP%/.quickmail |
| -l / -limit     | the limit to how many mails to show |
| -i / -important | only show the emails from supported services |

```bash
# to generate the email
bun run .\generate.js

# to see its inbox
# it will show the latest to oldests
bun run .\inbox.js -e customemail@gmail.com -l 1
```

# supported services
1. codeberg
2. telegram
3. github
4. proton
5. teenchat
6. fluxer
