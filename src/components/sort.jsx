import React from 'react'

export default function Sort() {
  return (
    <div>
        <div class="sort">
            <input type="radio" id="all" name="sort" value="all" />
            <label for="all">All</label>
            <input type="radio" id="buying" name="sort" value="buying" />
            <label for="buying">Buying</label>
            <input type="radio" id="selling" name="sort" value="selling" />
            <label for="selling">Selling</label>
            <input type="radio" id="tender" name="sort" value="tender" />
            <label for="tender">Tender</label>
        </div><hr/> 
    </div>
  )
}
