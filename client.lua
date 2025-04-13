local Quests = {}

exports('AddQuest', function(description, icon)
  if not icon then icon = 'fa-solid fa-circle-info' end
  local id = #Quests + 1

  local newQuest = {
    id = id,
    description = description,
    icon = icon,
    completed = false
  }

  Quests[id] = newQuest 

  SendNUIMessage({
    action = 'addQuest',
    quest = newQuest
  })
end)

exports('RemoveQuest', function(id)
  if Quests[id] then
    SendNUIMessage({
      action = 'removeQuest',
      id = Quests[id].id
    })
    Quests[id] = nil
  end
end)

exports('CompleteQuest', function(id)
  if Quests[id] then
    SendNUIMessage({
      action = 'completeQuest',
      id = Quests[id].id
    })
    Quests[id].completed = true
  end
end)

-- TEST

RegisterCommand("startquest", function()
  exports['bulka_quests']:AddQuest("ZJEDZ BURGERA", "fa-solid fa-burger")
end, false)

RegisterCommand("removequest", function()
  exports['bulka_quests']:RemoveQuest(1)
end, false)

RegisterCommand("endquest", function()
  exports['bulka_quests']:CompleteQuest(1)
end, false)