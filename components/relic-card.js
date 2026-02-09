/**
 * Relic Card Component
 * Evergreen & Time — Visual representation of tradeable relics
 */

export class RelicCard {
  constructor(relicData) {
    this.relic = relicData;
  }

  /**
   * Get CSS class for relic type
   */
  getTypeClass(type) {
    const typeClasses = {
      'connection': 'relic-connection',
      'memory': 'relic-memory',
      'consequence': 'relic-consequence',
      'mystery': 'relic-mystery'
    };
    return typeClasses[type] || 'relic-mystery';
  }

  /**
   * Get emoji for relic type
   */
  getTypeEmoji(type) {
    const emojis = {
      'connection': '🔗',
      'memory': '💭',
      'consequence': '🔥',
      'mystery': '❓'
    };
    return emojis[type] || '❓';
  }

  /**
   * Render the relic card HTML
   */
  render() {
    const typeClass = this.getTypeClass(this.relic.type);
    const typeEmoji = this.getTypeEmoji(this.relic.type);

    return `
      <div class="relic-card ${typeClass}" data-relic-id="${this.relic.id}">
        <div class="relic-header">
          <span class="relic-emoji">${typeEmoji}</span>
          <span class="relic-type">${this.relic.type}</span>
        </div>
        <div class="relic-name">${this.relic.name}</div>
        <div class="relic-description">${this.relic.description}</div>
        <div class="relic-meta">
          <span class="relic-era">📅 ${this.relic.originEra}</span>
          <span class="relic-value">💰 ${this.relic.value}g</span>
        </div>
        <div class="relic-effect">
          <strong>Effect:</strong> ${this.relic.effect.description}
        </div>
      </div>
    `;
  }

  /**
   * Render CSS styles for relic cards
   */
  static renderStyles() {
    return `
      <style>
        .relic-card {
          background: linear-gradient(135deg, rgba(44, 24, 16, 0.9), rgba(26, 26, 26, 0.95));
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 12px;
          padding: 16px;
          max-width: 280px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .relic-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212, 175, 55, 0.6);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .relic-connection {
          border-left: 4px solid #4169E1;
        }

        .relic-memory {
          border-left: 4px solid #FFD700;
        }

        .relic-consequence {
          border-left: 4px solid #DC143C;
        }

        .relic-mystery {
          border-left: 4px solid #9370DB;
        }

        .relic-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .relic-emoji {
          font-size: 1.5rem;
        }

        .relic-type {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #A0A0A0;
        }

        .relic-name {
          font-family: 'Georgia', serif;
          font-size: 1.1rem;
          color: #E8D5B7;
          margin-bottom: 8px;
        }

        .relic-description {
          font-size: 0.85rem;
          color: #A0A0A0;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .relic-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #888;
          margin-bottom: 10px;
        }

        .relic-effect {
          font-size: 0.8rem;
          color: #D4AF37;
          padding-top: 10px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
        }

        .relic-effect strong {
          color: #A0A0A0;
        }
      </style>
    `;
  }
}

export default RelicCard;
