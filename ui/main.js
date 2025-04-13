$(function() {
  window.addEventListener('message', function(event) {
      const data = event.data;

      if (data.action === 'addQuest' && data.quest) {
          addQuest(data.quest);
      }

      if (data.action === 'completeQuest' && data.id) {
          completeQuest(data.id);
      }

      if (data.action === 'removeQuest' && data.id) {
          removeQuest(data.id);
      }
  });


  function addQuest(quest) {
      const el = $(`
    <div class="quest quest-hidden" data-id="${quest.id}">
      <span>${quest.description}</span>
      <div id="box">
        <i class="${quest.icon}" style="color: white;"></i>
      </div>
    </div>
  `);

      $('.container').append(el);


      setTimeout(() => {
          el.removeClass('quest-hidden').addClass('quest-show');
      }, 350);
  }


  function completeQuest(id) {
      const quest = $(`.quest[data-id="${id}"]`);
      if (quest.length) {
          quest.attr('id', 'done');
          setTimeout(() => {
              quest.fadeOut(300, function() {
                  quest.remove();
              });
          }, 2500);
      }
  }

  function removeQuest(id) {
      const quest = $(`.quest[data-id="${id}"]`);
      if (quest.length) {
          quest.remove();
      }
  }
});