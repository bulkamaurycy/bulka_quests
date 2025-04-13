# bulka quests

## Example Use

```lua
RegisterCommand("start-quest", function()
  exports['bulka_quests']:AddQuest("EAT A BURGER", "fa-solid fa-burger")
end, false)

RegisterCommand("remove-quest", function()
  exports['bulka_quests']:RemoveQuest(1)
end, false)

RegisterCommand("end-quest", function()
  exports['bulka_quests']:CompleteQuest(1)
end, false)
```

## Preview  
https://imgur.com/a/g9gyjQC

## Functions

- `AddQuest(label, icon)` – adds a new quest with an icon from Font Awesome  
- `RemoveQuest(id)` – removes a quest by ID  
- `CompleteQuest(id)` – completes a quest by ID

## Authors
- [@bulkamaurycy](https://github.com/bulkamaurycy)