/*
    This is where we'll route all of the received http requests
    into controller response functions.
    
    @author McKilla Gorilla
*/
router.post('/playlist', PlaylistController.createPlaylist)
router.get('/playlist/:id', PlaylistController.getPlaylistById)
router.get('/playlists', PlaylistController.getPlaylists)
router.get('/playlistpairs', PlaylistController.getPlaylistPairs)
router.delete('/playlist/:id', PlaylistController.deletePlaylist)
router.put('/playlist/:id', PlaylistController.updatePlaylist)

module.exports = router