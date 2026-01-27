// Cloudflare Worker for Twitch Schedule API
// This worker fetches your Twitch schedule and returns it to your app

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    
    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }
    
    try {
      // Get credentials from environment variables
      const TWITCH_CLIENT_ID = env.TWITCH_CLIENT_ID;
      const TWITCH_CLIENT_SECRET = env.TWITCH_CLIENT_SECRET;
      const TWITCH_CHANNEL_NAME = 'mikooki';
      
      // Get OAuth token
      const tokenResponse = await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `client_id=${TWITCH_CLIENT_ID}&client_secret=${TWITCH_CLIENT_SECRET}&grant_type=client_credentials`
      });
      
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
      
      if (!accessToken) {
        throw new Error('Failed to get access token');
      }
      
      // Get user ID
      const userResponse = await fetch(
        `https://api.twitch.tv/helix/users?login=${TWITCH_CHANNEL_NAME}`,
        {
          headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
      
      const userData = await userResponse.json();
      const userId = userData.data[0]?.id;
      
      if (!userId) {
        throw new Error('User not found');
      }
      
      // Get schedule
      const scheduleResponse = await fetch(
        `https://api.twitch.tv/helix/schedule?broadcaster_id=${userId}&first=5`,
        {
          headers: {
            'Client-ID': TWITCH_CLIENT_ID,
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );
      
      const scheduleData = await scheduleResponse.json();
      
      // Return just the segments
      return new Response(JSON.stringify({
        segments: scheduleData.data?.segments || []
      }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
      
    } catch (error) {
      return new Response(JSON.stringify({ 
        error: error.message,
        segments: []
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }
  }
};
