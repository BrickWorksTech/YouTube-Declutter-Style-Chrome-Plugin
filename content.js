function modifyYouTubeLayout() { 
  const style = document.createElement('style');
  style.textContent =  `
    /* Shrink and center the entire grid */
    #contents {
      width: 95% !important;
      max-width: 95% !important;
    }

    /* Use flex layout */
    ytd-rich-grid-renderer #contents {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 16px !important;
    }

    /* Set regular video cards to fixed width */
    ytd-rich-item-renderer {
      width: 300px !important;
      box-sizing: border-box !important;
    }

    /* Hide Shorts and special sections */
    ytd-rich-section-renderer {
      display: none !important;
    }

    /* Hide playlist-based items */
    ytd-playlist-renderer,
    ytd-grid-playlist-renderer,
    ytd-rich-item-renderer:has(ytd-playlist-renderer),
    ytd-rich-item-renderer:has(ytd-grid-playlist-renderer) {
      display: none !important;
    }
    
    #chips-wrapper {
        margin-left:0px !important;
    }
        
    #chips-wrapper.ytd-feed-filter-chip-bar-renderer{
    
    }
    
  `;
  document.head.appendChild(style);
}

window.addEventListener('yt-page-data-updated', modifyYouTubeLayout);
