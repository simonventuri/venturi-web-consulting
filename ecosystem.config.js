module.exports = {
  apps: [{
    name: 'venturi-web-consulting',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/venturi-web-consulting',
    env: {
      NODE_ENV: 'production',
      PORT: 3001,
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    env_file: '.env.production'
  }]
};
