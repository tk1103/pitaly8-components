/**
 * PITALY 8 external runtime (dummy template)
 * Host this file at: https://your-domain.com/component.js
 */

/**
 * @typedef {"toward" | "away"} DirectionMode
 *
 * @typedef {Object} Pitaly8Settings
 * @property {boolean} enabled
 * @property {DirectionMode} direction
 * @property {number} speed
 * @property {number} smoothing
 */

/**
 * Framer shell から呼ばれる公開API。
 * 将来、内部ロジックを難読化してもこの関数シグネチャは維持してください。
 *
 * @param {HTMLElement} container
 * @param {Pitaly8Settings} settings
 * @returns {() => void | void}
 */
export function runPitaly8Component(container, settings) {
    if (!container) return

    const root = container
    root.style.position = root.style.position || "relative"
    root.style.overflow = "hidden"

    if (!settings?.enabled) {
        root.innerHTML = ""
        return
    }

    // Dummy visualization (replace with your protected core logic)
    const badge = document.createElement("div")
    badge.textContent = `PITALY 8 • ${settings.direction} • spd:${Math.round(
        settings.speed
    )} • sm:${Math.round(settings.smoothing)}`
    badge.style.position = "absolute"
    badge.style.left = "12px"
    badge.style.bottom = "12px"
    badge.style.padding = "6px 10px"
    badge.style.borderRadius = "999px"
    badge.style.font = "12px/1.2 Inter, system-ui, sans-serif"
    badge.style.background = "rgba(0,0,0,0.65)"
    badge.style.color = "#fff"
    badge.style.pointerEvents = "none"
    root.appendChild(badge)

    // Return disposer for clean unmounts/updates.
    return function dispose() {
        badge.remove()
    }
}
